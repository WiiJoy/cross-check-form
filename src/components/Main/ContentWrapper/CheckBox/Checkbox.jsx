import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changePartialPoints, changeMarkType, changeComments } from '../../../../redux/main/actions'

export default function CheckBox({ text, maxPoints, id, elType, isDisable = false }){
  const phrases = ['Не выполнено', 'Выполнено частично', 'Выполнено полностью']
  const penaltyPhrases = ['Полное снятие баллов', 'Частичное снятие баллов', 'Выполнено полностью']
  const [partialPoints, setPartialPoints] = useState(maxPoints/2);
  const dispatch = useDispatch();
  const { types, comments } = useSelector(state => state.mainReducer);
  const [isCommentInputVisible, setCommentInputVisibility] = useState(false);

  const inputValue = types.find((type)=>type.id === id);
  const inputType = inputValue?.type;

  const parialPointsInputClassName = inputType === 1 ? 'partial-points-input partial-points-input_active' : 'partial-points-input'

  const setGlobalPartialPoints = (value, comp) => {
    if(value >= 0 && value <= maxPoints) {
      dispatch(changePartialPoints({id, value: value, comp}))
      setPartialPoints(value);
    } else {
      const newValue = maxPoints/2;
      dispatch(changePartialPoints({id, newValue: newValue, comp}))
      setPartialPoints(newValue);
    }
  }

  const changeMarkTypeAction = (event, inputIndex, comp) => {
    if(event.target.tagName === "INPUT") {
      dispatch(changeMarkType({id, type: inputIndex, comp}))
    }
  }

  if (elType === 'subtask') {
    return <div className="checkbox-container">
      <div className="task-max-score">
        <span>Балл за выполнение</span>
        <p>{maxPoints}</p>
      </div>
      <div className="task-description">
        <p className="task-title">{text}</p>
        <button className="add-feedback" onClick={(e)=>{e.preventDefault(); setCommentInputVisibility(!isCommentInputVisible)}}>{!isCommentInputVisible? 'Добавить отзыв': 'Скрыть отзыв'}</button>
        { isCommentInputVisible &&
          <div className="add-form">
            <textarea placeholder="Write your feedback here, it will be saved automatically."
              value={comments.find((comment)=>comment.id === id)?.value || ''}
              onInput={(event)=>dispatch(changeComments({id, value: event.target.value}))}/>
          </div> }
        <p style={{display: inputValue && (inputValue.type === 0 || inputValue.type === 1) ? "block" : "none"}} className="task-warning">Обязательно оставь комментарий по причине снижения баллов!</p>
      </div>
      <div className="radio-group">
        {phrases.map((phrase, inputIndex)=>
          <label key={phrase}>
            <span className="radio-phrase">{phrase}</span>
            <input type="radio" name={id} checked={inputType === inputIndex} onChange={(event)=>changeMarkTypeAction(event, inputIndex, elType)}/>
            <span className={'checkmark checkmark_' + inputIndex}/>
            {inputIndex === 1 &&
            <input type='number' className={parialPointsInputClassName} value={partialPoints} step={1} min={1} max={maxPoints - 1} onChange={(event)=>setGlobalPartialPoints(event.target.value)}/>}
          </label>
        )}
      </div>
    </div>
  } else {
    return <div className={isDisable ? "checkbox-container checkbox-container_penalty checkbox-container_red" : "checkbox-container checkbox-container_penalty"}>
      <div className="task-max-score">
        <span>Штрафные баллы</span>
        <p>{-maxPoints}</p>
      </div>
      <div className="task-description">
        <p className="task-title">{text}</p>
        <button className="add-feedback" onClick={(e)=>{e.preventDefault(); setCommentInputVisibility(!isCommentInputVisible)}}>{!isCommentInputVisible? 'Добавить отзыв': 'Скрыть отзыв'}</button>
        { isCommentInputVisible &&
          <div className="add-form">
            <textarea placeholder="Write your feedback here, it will be saved automatically."
              value={comments.find((comment)=>comment.id === id)?.value || ''}
              onInput={(event)=>dispatch(changeComments({id, value: event.target.value}))}/>
          </div> }
        <p style={{display: inputValue && (inputValue.type === 0 || inputValue.type === 1) ? "block" : "none"}} className="task-warning">Обязательно оставь комментарий по причине снижения баллов!</p>
      </div>
      <div className="radio-group">
        {penaltyPhrases.map((phrase, inputIndex)=>
          <label key={phrase}>
            {phrase}
            <input type="radio" name={id} disabled={isDisable} checked={inputType === inputIndex} onChange={(event)=>changeMarkTypeAction(event, inputIndex, elType)}/>
            <span className={'checkmark checkmark_' + inputIndex}/>
            {inputIndex === 1 &&
            <input type='number' className={parialPointsInputClassName} disabled={isDisable} value={partialPoints} step={1} min={1} max={maxPoints - 1} onChange={(event)=>setGlobalPartialPoints(event.target.value, elType)}/>}
          </label>
        )}
      </div>
    </div>
    
  }
}