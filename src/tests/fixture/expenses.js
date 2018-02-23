import moment from 'moment';

export default[{
    id:'1',
    description:'this is biblo',
    amount:300,
    createdAt:300,
    note:'I am gonna kill u :p  from sauroman'

},{
    id:'2',
    description:'this is frodo',
    amount:400,
    createdAt:moment(0).subtract(4,'days').valueOf(),
    note:'hey ::: from Gandalf'
},
{
    id:'3',
    description:'this is Peter',
    amount:500,
    createdAt:moment(0).subtract(6,'days').valueOf(),
    note:''
}
];

