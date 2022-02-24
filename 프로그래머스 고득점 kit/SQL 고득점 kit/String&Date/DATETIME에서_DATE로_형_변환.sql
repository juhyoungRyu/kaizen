select
    animal_id,
    name,
    DATE_FORMAT(datetime, "%Y-%m-%d")
from
    animal_ins
order by
    animal_id