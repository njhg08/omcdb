module.exports = {
    FETCH_ALL_DISEASES:'SELECT * FROM diseases',
    ADD_NEW_DISEASE:'INSERT INTO diseases (disease, description) VALUES ($1, $2)'
}