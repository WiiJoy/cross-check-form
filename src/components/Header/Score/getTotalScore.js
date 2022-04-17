export default function getTotalScore(types, criteria, partialPoints) {
  let sum = 0;

  types.forEach((item) => {
    // console.log(partialPoints.find((partialPoint)=>+partialPoint.id === +item.id))

    switch (item.comp) {
      case 'subtask':
        if (item.type === 1) {
          sum += partialPoints.find((partialPoint) => partialPoint.id === item.id)?.value || criteria.find((criteriaItem) => criteriaItem.id === item.id)?.max / 2
        }
        if (item.type === 2) {
          sum += criteria.find((criteriaItem) => criteriaItem.id === item.id)?.max
        }
        break
      case 'penalty':
        if (item.type === 1) {
          sum -= partialPoints.find((partialPoint) => partialPoint.id === item.id)?.value || criteria.find((criteriaItem) => criteriaItem.id === item.id)?.max / 2
        }
        if (item.type === 0) {
          sum -= criteria.find((criteriaItem) => criteriaItem.id === item.id)?.max
        }
        break
    }



    // if (item.type === 1) {
    //   sum += partialPoints.find((partialPoint) => partialPoint.id === item.id)?.value || criteria.find((criteriaItem) => criteriaItem.id === item.id)?.max / 2
    // }
    // if (item.type === 2) {
    //   sum += criteria.find((criteriaItem) => criteriaItem.id === item.id)?.max
    // }
  })

  return sum;
}