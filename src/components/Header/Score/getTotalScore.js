export default function getTotalScore(types, criteria, partialPoints) {
  let sum = 0;

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
          currSum[item.id] += partialPoints.find((partialPoint) => partialPoint.id === item.id)?.value || criteria.find((criteriaItem) => criteriaItem.id === item.id)?.max / 2
        }
        if (item.type === 2) {
          currSum[item.id] += criteria.find((criteriaItem) => criteriaItem.id === item.id)?.max
        }
        break
      case 'penalty':
        if (item.type === 1) {
          currSum[item.parent] -= partialPoints.find((partialPoint) => partialPoint.id === item.id)?.value || criteria.find((criteriaItem) => criteriaItem.id === item.id)?.max / 2
        }
        if (item.type === 0) {
          currSum[item.parent] -= criteria.find((criteriaItem) => criteriaItem.id === item.id)?.max
        }
        break
    }
  })

  for (let key in currSum) {
    sum += currSum[key] > 0 ? currSum[key] : 0
  }

  return sum;
}