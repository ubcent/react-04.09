export const postsData = [
    {
        id: '1',
        title: 'Title post 1',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore libero velit molestias distinctio.',
        author: 1,
        comments: [1,3,6],
    },
    {
        id: '2',
        title: 'Title post 2',
        text: 'Illum, labore. Quibusdam, explicabo eligendi. Voluptates officia molestias libero eius cumque expedita repellat reiciendis iusto, incidunt saepe!',
        author: 2,
        comments: [2,4,5],
    },
    {
        id: '3',
        title: 'Title post 3',
        text: 'Officia nemo non eius, odit sequi hic obcaecati totam aliquam itaque commodi velit quidem, dolore placeat officiis maiores perferendis laboriosam.',
        author: 2,
        comments: [7],
    },
    {
        id: '4',
        title: 'Title post 4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate impedit voluptates fugiat explicabo atque, corporis libero voluptas hic numquam aliquam!',
        author: 3,
        comments: [],
    },
    {
        id: '5',
        title: 'Title post 2',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi sed adipisci minima nobis.',
        author: 3,
        comments: [],
    }
];

export const commentsData = [
    {
        id: '1',
        author: 2,
        text: 'Lorem ipsum dolor sit.'
    },
    {
        id: '2',
        author: 1,
        text: 'Lorem ipsum dolor sit.'
    },
    {
        id: '3',
        author: 1,
        text: 'Animi sed adipisci minima nobis.'
    },
    {
        id: '4',
        author: 3,
        text: 'Voluptate impedit voluptates fugiat.'
    },
    {
        id: '5',
        author: 4,
        text: 'Vlibero voluptas hic numquam.'
    },
    {
        id: '6',
        author: 4,
        text: 'Odit sequi hic obcaecati tota.'
    },
    {
        id: '7',
        author: 2,
        text: 'Odit lorem ipsum dolor sit.'
    },
];

export const usersData = [
    {
        id: '1',
        name: 'Vasy',
    },
    {
        id: '2',
        name: 'Alina',
    },
    {
        id: '3',
        name: 'Anna',
    },
    {
        id: '4',
        name: 'Anton',
    },
];

export const to = function(func){
    setTimeout(() => {
        func();
    }, 100);
}