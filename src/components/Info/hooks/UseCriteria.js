export default function UseCriteria(types, filteredCriteria) {
  const wrongInputs = types.filter((e) => {
    let currCriteria = filteredCriteria.find(criteria => criteria.id === e.id)
    return (e.type === 0 && currCriteria.type === 'subtask') || (e.type === 2 && currCriteria.type === 'penalty')
  });
  const wrongCriteria = filteredCriteria.filter((criteria) => wrongInputs.find((input) => input.id === criteria.id))

  const partialInputs = types.filter((e) => {
    let currCriteria = filteredCriteria.find(criteria => criteria.id === e.id)
    return e.type === 1 && currCriteria.type === 'subtask'
  });
  const partialCriteria = filteredCriteria.filter((criteria) => partialInputs.find((input) => input.id === criteria.id))

  const correctInputs = types.filter((e) => {
    let currCriteria = filteredCriteria.find(criteria => criteria.id === e.id)
    return (e.type === 2 && currCriteria.type === 'subtask') || (e.type === 0 && currCriteria.type === 'penalty')
  });
  const correctCriteria = filteredCriteria.filter((criteria) => correctInputs.find((input) => input.id === criteria.id))

  return [wrongCriteria, partialCriteria, correctCriteria]
}