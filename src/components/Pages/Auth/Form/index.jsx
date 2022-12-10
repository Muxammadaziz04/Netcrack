import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Input from 'components/UI/Form/Input';
import Flex from 'components/UI/Flex';
import Button from 'components/UI/Form/Button';
import cls from './Form.module.scss'
import Image from 'next/image';
import Title from 'components/UI/Typography/Title';
import Subtitle from 'components/UI/Typography/Subtitle';
import Text from 'components/UI/Typography/Text';

const Form = ({
    fields = [],
    title = '',
    linkToReset = false,
    onSubmit = () => {}
}) => {
    const { register, formState: { errors, isValid }, handleSubmit } = useForm({ mode: 'onChange' })

    return (
        <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={cls.form__logo}>
                <Image 
                    src='/netsnack.svg'
                    layout='fill'
                    objectFit='cover'
                    alt='logo'
                />
            </div>

            <Title textAlign='center'>{title}</Title>

            <Flex
                className={cls.form__fields}
                direction='column'
                gap={15}
            >
                {
                    fields?.length > 0 && fields.map(input => (
                        <Input
                            key={input.id}
                            label={input.label}
                            name={input.name}
                            type={input.type}
                            withIcon={input.withIcon}
                            register={{ ...register(input.name, { ...input.rules }) }}
                            errors={errors}
                        />
                    ))
                }
            </Flex>

            <Button type='submit' disabled={!isValid}>
                <Subtitle color='white' letterSpace='1' textAlign='center'>Continue</Subtitle>
            </Button>

            {
                linkToReset && (
                    <Text
                        as={Link} 
                        href='/auth/reset' 
                        color='#625BF7'
                        fontSize='16'
                    >
                        Forget your password?
                    </Text>
                )
            }
        </form>
    );
}

export default Form;
