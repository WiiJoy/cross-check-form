export default function getTotalScore(types, criteria, partialPoints) {
  let sum = 0;

  const maxSum = {
    '1': 10,
    '5': 10,
    '8': 10,
    '11': 10,
    '15': 10,
    '18': 10,
    '22': 10,
    '26': 10,
    '29': 10,
    '32': 10
  }

  const currSum = {
    '1': 0,
    '5': 0,
    '8': 0,
    '11': 0,
    '15': 0,
    '18': 0,
    '22': 0,
    '26': 0,
    '29': 0,
    '32': 0
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

  for (let key in maxSum) {
    if (maxSum[key] + currSum[key] >= 0) {
      sum += currSum[key]
    } else {
      sum -= maxSum[key]
    }
  }

  // if (maxSum['1'] + currSum['1'] >= 0) {
  //   sum += currSum['1']
  // } else {
  //   sum -= maxSum['1']
  // }

  // if (maxSum['5'] + currSum['5'] >= 0) {
  //   sum += currSum['5']
  // } else {
  //   sum -= maxSum['5']
  // }

  // if (maxSum['11'] + currSum['11'] >= 0) {
  //   sum += currSum['11']
  // } else {
  //   sum -= maxSum['11']
  // }

  return sum;
}