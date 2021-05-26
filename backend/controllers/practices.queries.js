module.exports = {
    FETCH_ALL_PRACTICES:'SELECT * FROM farming_practices',
    ADD_NEW_PRACTICE:'INSERT INTO farming_practices (farming_practice, description) VALUES ($1, $2)'
}