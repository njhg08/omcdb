module.exports = {
    FETCH_ALL_FARMERS:'SELECT farmers.id AS id, first_name, last_name, sex, phone_number, civil_status, municipality, barangay, age, farming_experience, education, male_household, female_household, financing FROM farmers INNER JOIN municipalities ON fk_municipality = municipalities.id INNER JOIN barangays ON fk_barangay = barangays.id INNER JOIN tlkp_sex ON fk_sex = tlkp_sex.id INNER JOIN tlkp_civil_status ON fk_civil_status = tlkp_civil_status.id INNER JOIN tlkp_education ON fk_education = tlkp_education.id INNER JOIN tlkp_financing ON fk_financing = tlkp_financing.id ORDER BY municipality',
    ADD_NEW_FARMER:'INSERT INTO farmers(first_name, last_name, fk_sex, phone_number, fk_civil_status, fk_municipality, fk_barangay, age, farming_experience, fk_education, male_household, female_household, fk_financing) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)',
    FETCH_FARMER_DETAILS: 'SELECT farmers.id AS id, first_name, last_name,fk_sex, sex, phone_number,fk_civil_status, civil_status, farmers.fk_municipality as fk_municipality, municipality,fk_barangay, barangay, age, farming_experience,fk_education, education, male_household, female_household,fk_financing, financing FROM farmers INNER JOIN municipalities ON fk_municipality = municipalities.id INNER JOIN barangays ON fk_barangay = barangays.id INNER JOIN tlkp_sex ON fk_sex = tlkp_sex.id INNER JOIN tlkp_civil_status ON fk_civil_status = tlkp_civil_status.id INNER JOIN tlkp_education ON fk_education = tlkp_education.id INNER JOIN tlkp_financing ON fk_financing = tlkp_financing.id WHERE farmers.id = $1',
    UPDATE_FARMER_DETAILS: 'UPDATE farmers SET first_name=$1, last_name=$2, fk_sex=$3, phone_number=$4, fk_civil_status=$5, fk_municipality=$6, fk_barangay=$7, age=$8, farming_experience=$9, fk_education=$10, male_household=$11, female_household=$12, fk_financing=$13 WHERE id=$14 returning *',
}