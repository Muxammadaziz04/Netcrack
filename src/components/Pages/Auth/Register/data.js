export const inputs = [
    {
        id: 1,
        type: 'text',
        withIcon: false,
        label: 'Fist name',
        name: 'first_name',
        rules: {
            required: 'First name is requierd',
        }
    },
    {
        id: 2,
        type: 'text',
        withIcon: false,
        label: 'Last name',
        name: 'last_name',
        rules: {}
    },
    {
        id: 3,
        type: 'text',
        withIcon: false,
        label: 'Email',
        name: 'email',
        rules: {
            required: 'Email is requierd',
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address'
            }
        }
    },
    {
        id: 4,
        type: 'password',
        withIcon: true,
        label: 'Password',
        name: 'password',
        rules: {
            required: 'Password is requierd',
            minLength: {
                value: 8,
                message: 'Min length 8'
            }
        }
    },
]