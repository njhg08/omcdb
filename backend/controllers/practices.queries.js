module.exports = {
    FETCH_ALL_PRACTICES:'SELECT * FROM farm_practices',
    ADD_NEW_PRACTICE:'INSERT INTO farm_practices (farm_practice, description) VALUES ($1, $2) returning id'
}