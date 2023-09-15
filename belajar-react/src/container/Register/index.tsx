import { Card, Text } from '../../components';
import type { DatePickerProps } from 'antd';
import { Input, Button, DatePicker} from 'antd';
import { useFormik } from 'formik';
import { useState } from 'react';
import React from 'react';
import * as yup from 'yup'

interface Regis {
    name: string;
    email: string;
    dob: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    username: string;
    password: string;
}

const initialValues = {
    name: '',
    email: '',
    dob: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    username: '',
    password: ''
}

const validationSchema = yup.object({
    name: yup.string().required('required Fullname'),
    email: yup.string().required('required Email'),
    dob: yup.string().required('required Date of Birth'),
    address: yup.string().required('required Address'),
    city: yup.string().required('required City'),
    state: yup.string().required('required State'),
    zipcode: yup.string().required('required zipcode'),
    username: yup.string().required('required'),
    password: yup.string().required('required')
})

const Register = () => {

    const handleSubmit = (values: Regis) => {
        console.log(values)
        window.alert("Success Registration")
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

        const [step, setStep] = useState<number>(1);
        const handleNext = () =>{
            if(step === 1){
                setStep((prevStep) =>prevStep+1);
            }
            if(step === 2){
                setStep((prevStep) =>prevStep+1);
            }
            return
        }
        const handlePrev = () =>{
            if(step === 2 ){
                setStep((prevStep) => prevStep-1);
            }
            if(step === 3 ){
                setStep((prevStep) => prevStep-1);
            }
            return
        }
        const dateformat = "YY-MM-DD";
        const onChange: DatePickerProps['onChange'] = (dateString) => {
            formMik.setFieldValue("dob",dateString);
          };
          const [passwordVisible, setPasswordVisible] = React.useState(false);
    return (

        <form onSubmit={formMik.handleSubmit}>
            {step === 1 && (
            <Card title={'Personal Information'}>
                <Text>Fullname:</Text>
                <Input name={'name'}
                        placeholder='Full Name'
                        value={formMik.values.name} 
                        onChange={formMik.handleChange('name')}
                        status={formMik.errors.name && 'error'}/>
                  {formMik.errors.name && (
                        <Text>{formMik.errors.name}</Text>
                    )}
                <Text>Email Address:</Text>
                <Input name={'email'}
                        value={formMik.values.email} 
                        onChange={formMik.handleChange('email')}
                        status={formMik.errors.email && 'error'}/>
                      {formMik.errors.email && (
                        <Text>{formMik.errors.email}</Text>
                    )}
                <Text>DOB:</Text>
                <DatePicker name={'dob'}
                    format={dateformat}
                    onChange={onChange}
                    status={formMik.errors.dob && 'error'}
                />
                  {formMik.errors.dob && (
                        <Text>{formMik.errors.dob}</Text>
                    )}
             <div>
                    <Button type={'primary'} onClick={handleNext}>Berikutnya</Button>
            </div>
            </Card>
            )}
            {step === 2 && (
            <Card title={'Address Information'}>
                <Text>Street Address:</Text>
                <Input name={'address'}
                        placeholder='address'
                        value={formMik.values.address} 
                        onChange={formMik.handleChange('address')}
                        status={formMik.errors.address && 'error'}/>
                  {formMik.errors.address && (
                        <Text>{formMik.errors.address}</Text>
                    )}
                <Text>City:</Text>
                <Input name={'city'}
                        placeholder='City'
                        value={formMik.values.city} 
                        onChange={formMik.handleChange('city')}
                        status={formMik.errors.city && 'error'}/>
                  {formMik.errors.city && (
                        <Text>{formMik.errors.city}</Text>
                    )}
                <Text>State:</Text>
                <Input name={'state'}
                        placeholder='State'
                        value={formMik.values.state} 
                        onChange={formMik.handleChange('state')}
                        status={formMik.errors.state && 'error'}/>
                  {formMik.errors.state && (
                        <Text>{formMik.errors.state}</Text>
                    )}
                <Text>Zip code:</Text>
                <Input name={'zipcode'}
                        placeholder='zipcode'
                        value={formMik.values.zipcode} 
                        onChange={formMik.handleChange('zipcode')}
                        status={formMik.errors.zipcode && 'error'}/>
                  {formMik.errors.zipcode && (
                        <Text>{formMik.errors.zipcode}</Text>
                    )}
                 <div>
                    <Button onClick={handlePrev}>Kembali</Button>
                    <Button type={'primary'} onClick={handleNext}>Berikutnya</Button>
                </div>
            </Card>
            )}
            {step === 3 && (
            <Card title={'Account Information'}>
                <Text>Username:</Text>
                <Input name={'username'}
                        placeholder='Username'
                        value={formMik.values.username} 
                        onChange={formMik.handleChange('username')}
                        status={formMik.errors.username && 'error'}/>
                  {formMik.errors.username && (
                        <Text>{formMik.errors.username}</Text>
                    )}
                <Text>Password:</Text>
                <Input.Password name={'password'}
                        placeholder='Password'
                        visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                        value={formMik.values.password} 
                        onChange={formMik.handleChange('password')}
                        status={formMik.errors.password && 'error'}/>
                  {formMik.errors.password && (
                        <Text>{formMik.errors.password}</Text>
                    )}
                 <div>
                    <Button onClick={handlePrev}>Kembali</Button>
                </div>
                <Button type={'primary'} htmlType={"submit"}>Submit</Button>
            </Card>
            )}
        </form>
    )
}

export default Register