SELECT
    outs.animal_id,
    outs.name
FROM
    animal_outs AS outs
    LEFT JOIN animal_ins AS ins ON outs.animal_id = ins.animal_id
WHERE
    ins.animal_id IS NULL;