import Link from 'next/link';
import Text from 'components/UI/Typography/Text';
import Form from '../Form';
import { inputs } from './data';

import cls from './Login.module.scss'

const LoginPage = () => {
    return (
        <div className={cls.login}>
            <Form 
                fields={inputs} 
                title='Sign in to your account' 
                linkToReset={true} 
                onSubmit={(data) => alert(JSON.stringify(data))}
            />
            <span>
                <Text 
                    color='black' 
                    fontWeight="300"
                    style={{display: 'flex', gap: '5px'}}
                >
                    Do not have an account? 
                    <Link href='/auth/register'>
                        <Text fontWeight='500'>Sign up</Text>
                    </Link>
                </Text>
            </span>
        </div>
    );
}

export default LoginPage;
