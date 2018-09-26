export const postsData = [
    {
        id: '1',
        title: 'Title post 1',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim modi explicabo, amet ullam provident qui, delectus a, sed nostrum sunt ea dicta omnis! Adipisci temporibus est, pariatur impedit officiis reiciendis tenetur? Officiis maiores amet error beatae sint! Nam labore eos nesciunt vitae repudiandae, ex sunt reiciendis explicabo culpa perspiciatis eius provident id, vel minima dolorem. Ratione, eius laborum recusandae dolorum atque corrupti, fugiat similique saepe unde quibusdam, numquam perferendis. Error doloremque incidunt laudantium suscipit et, placeat porro praesentium officia? Reprehenderit, tempora nihil. Distinctio molestiae nam dolorem temporibus quidem veritatis vel, ullam officiis, consequuntur numquam, quibusdam aliquid magni atque laborum quod.',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore libero velit molestias distinctio.',
        author: 1,
        comments: [1,3,6],
    },
    {
        id: '2',
        title: 'Title post 2',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim modi explicabo, amet ullam provident qui, delectus a, sed nostrum sunt ea dicta omnis! Adipisci temporibus est, pariatur impedit officiis reiciendis tenetur? Officiis maiores amet error beatae sint! Nam labore eos nesciunt vitae repudiandae, ex sunt reiciendis explicabo culpa perspiciatis eius provident id, vel minima dolorem. Ratione, eius laborum recusandae dolorum atque corrupti, fugiat similique saepe unde quibusdam, numquam perferendis. Error doloremque incidunt laudantium suscipit et, placeat porro praesentium officia? Reprehenderit, tempora nihil. Distinctio molestiae nam dolorem temporibus quidem veritatis vel, ullam officiis, consequuntur numquam, quibusdam aliquid magni atque laborum quod.',
        description: 'Illum, labore. Quibusdam, explicabo eligendi. Voluptates officia molestias libero eius cumque expedita repellat reiciendis iusto, incidunt saepe!',
        author: 2,
        comments: [2,4,5],
    },
    {
        id: '3',
        title: 'Title post 3',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim modi explicabo, amet ullam provident qui, delectus a, sed nostrum sunt ea dicta omnis! Adipisci temporibus est, pariatur impedit officiis reiciendis tenetur? Officiis maiores amet error beatae sint! Nam labore eos nesciunt vitae repudiandae, ex sunt reiciendis explicabo culpa perspiciatis eius provident id, vel minima dolorem. Ratione, eius laborum recusandae dolorum atque corrupti, fugiat similique saepe unde quibusdam, numquam perferendis. Error doloremque incidunt laudantium suscipit et, placeat porro praesentium officia? Reprehenderit, tempora nihil. Distinctio molestiae nam dolorem temporibus quidem veritatis vel, ullam officiis, consequuntur numquam, quibusdam aliquid magni atque laborum quod.',
        description: 'Officia nemo non eius, odit sequi hic obcaecati totam aliquam itaque commodi velit quidem, dolore placeat officiis maiores perferendis laboriosam.',
        author: 2,
        comments: [7],
    },
    {
        id: '4',
        title: 'Title post 4',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim modi explicabo, amet ullam provident qui, delectus a, sed nostrum sunt ea dicta omnis! Adipisci temporibus est, pariatur impedit officiis reiciendis tenetur? Officiis maiores amet error beatae sint! Nam labore eos nesciunt vitae repudiandae, ex sunt reiciendis explicabo culpa perspiciatis eius provident id, vel minima dolorem. Ratione, eius laborum recusandae dolorum atque corrupti, fugiat similique saepe unde quibusdam, numquam perferendis. Error doloremque incidunt laudantium suscipit et, placeat porro praesentium officia? Reprehenderit, tempora nihil. Distinctio molestiae nam dolorem temporibus quidem veritatis vel, ullam officiis, consequuntur numquam, quibusdam aliquid magni atque laborum quod.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate impedit voluptates fugiat explicabo atque, corporis libero voluptas hic numquam aliquam!',
        author: 3,
        comments: [],
    },
    {
        id: '5',
        title: 'Title post 2',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim modi explicabo, amet ullam provident qui, delectus a, sed nostrum sunt ea dicta omnis! Adipisci temporibus est, pariatur impedit officiis reiciendis tenetur? Officiis maiores amet error beatae sint! Nam labore eos nesciunt vitae repudiandae, ex sunt reiciendis explicabo culpa perspiciatis eius provident id, vel minima dolorem. Ratione, eius laborum recusandae dolorum atque corrupti, fugiat similique saepe unde quibusdam, numquam perferendis. Error doloremque incidunt laudantium suscipit et, placeat porro praesentium officia? Reprehenderit, tempora nihil. Distinctio molestiae nam dolorem temporibus quidem veritatis vel, ullam officiis, consequuntur numquam, quibusdam aliquid magni atque laborum quod.',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi sed adipisci minima nobis.',
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
    return new Promise((res, rej) => {
        setTimeout(() => {
           res( func() );
        }, 100);
    });
}