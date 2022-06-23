select
    ins.name,
    ins.datetime
from
    animal_ins as ins
    left join animal_outs as outs on ins.animal_id = outs.animal_id
where
    outs.animal_id is NULL
order by
    ins.datetime
limit
    3