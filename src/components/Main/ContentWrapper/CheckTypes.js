export default function CheckTypes(parentPens, parentPage, wrongCriteria, correctCriteria) {

    const isCorrectPage = correctCriteria.some(criteria => criteria.id === parentPage)

    if (!isCorrectPage) return true



    for (let parent of parentPens) {

        if (wrongCriteria.some(criteria => criteria.id === parent)) return true
    }

    return false
} 
