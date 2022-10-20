const fullName = {
    'AAPL': 'Apple',
    'GOOGL': 'Alphabet',
    'MSFT': 'Microsoft',
    'AMZN': 'Amazon',
    'FB': 'Facebook',
    'TSLA': 'Tesla',
}

const getFullName = abbr => {
    return fullName[abbr]
}

export default getFullName
