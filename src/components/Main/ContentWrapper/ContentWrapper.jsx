import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import CheckBox from "./CheckBox/Checkbox";
import Title from "./Title/Title";
import { toggleInfo } from "../../../redux/main/actions";
// import { CheckCriteria } from "../../Info//hooks/UseCriteria";
import UseCriteria from "../../Info/hooks/UseCriteria";
import CheckTypes from "./CheckTypes";


export default function ContentWrapper(){
  const { criteria, types } = useSelector(state => state.mainReducer);
  const dispatch = useDispatch()

  const filteredCriteria = criteria.filter((item)=>{return item.type === 'subtask' || item.type === 'penalty'})
  const [wrongCriteria, partialCriteria, correctCriteria] = UseCriteria(types, filteredCriteria);

  return <div className="content-wrapper">
    <section className="criteria-list">
      <form>
        {
          criteria.map((item)=>{
            if(item.type === 'title') return <Title key={item.id} title={item.title} id={item.ident}/>
            if(item.type === 'subtask') return <CheckBox key={item.id} text={item.text} maxPoints={item.max} id={item.id} elType={item.type}/>
            if(item.type === 'penalty') return <CheckBox key={item.id} text={item.text} maxPoints={item.max} id={item.id} elType={item.type} isDisable={CheckTypes(item.parentPens || [], item.parentPage, wrongCriteria, correctCriteria)}/>
            return <div>Unexpected error</div>
          })
        }
      </form>
    </section>
    <div className="feedback">
      <button onClick={()=>dispatch(toggleInfo())}>Показать отзыв</button>
    </div>
  </div>
}