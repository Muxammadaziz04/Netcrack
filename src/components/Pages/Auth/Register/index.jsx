import Link from 'next/link';
import Text from 'components/UI/Typography/Text';
import Form from '../Form';
import { inputs } from './data';

import cls from './Register.module.scss'

const RegisterPage = () => {
    return (
        <div className={cls.register}>
            <Form 
                fields={inputs} 
                title='Sign up' 
                onSubmit={(data) => alert(JSON.stringify(data))}
            />
            <span>
                <Text 
                    color='black' 
                    fontWeight="300"
                    style={{display: 'flex', gap: '5px'}}
                >
                    Have an account? 
                    <Link href='/auth/login'>
                        <Text fontWeight='500'>Sign in</Text>
                    </Link>
                </Text>
            </span>
        </div>
    );
}

export default RegisterPage;