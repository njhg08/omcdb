module.exports = {
    FETCH_ALL_PESTS:'SELECT * FROM pests',
    ADD_NEW_PEST:'INSERT INTO pests (pest, description) VALUES ($1, $2) returning id'
}