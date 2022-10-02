export default function getTotalScore(types, criteria, partialPoints) {
  let sum = 0;

  const maxSum = {
    '1': 60,
    '11': 40
  }

  const currSum = {
    '1': 0,
    '11': 0
  }

  types.forEach((item) => {
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
          // sum -= partialPoints.find((partialPoint) => partialPoint.id === item.id)?.value || criteria.find((criteriaItem) => criteriaItem.id === item.id)?.max / 2
          currSum[item.parent] -= partialPoints.find((partialPoint) => partialPoint.id === item.id)?.value || criteria.find((criteriaItem) => criteriaItem.id === item.id)?.max / 2
        }
        if (item.type === 0) {
          // sum -= criteria.find((criteriaItem) => criteriaItem.id === item.id)?.max
          currSum[item.parent] -= criteria.find((criteriaItem) => criteriaItem.id === item.id)?.max
        }
        break
    }
  })

  if (maxSum['1'] + currSum['1'] >= 0) {
    sum += currSum['1']
  } else {
    sum -= maxSum['1']
  }

  if (maxSum['11'] + currSum['11'] >= 0) {
    sum += currSum['11']
  } else {
    sum -= maxSum['11']
  }

  return sum;
}