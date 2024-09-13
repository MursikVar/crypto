import React from "react";
import formImage from './../../../image/form-img.jpg'
import './form.css'

class Form extends React.Component{
    state = {
        name: '',
        phone: '',
        telegram: '',
        message: '',
    }


    const

    render(){
        const {name, phone,  telegram, message} = this.state;

        return <section className="form">
            <div className="container">
                <div className="form__wrapper">
                    <div className="form__wrapper-heading">
                        <h3>Оставить <span>заявку</span></h3>
                    </div>
                    <div className="form__inner">
                        <div className="form__inner-img">
                            <img src={formImage} alt="Form Image" />
                        </div>
                        <form action="" className="form__inner-conection">
                            <input type="text" name="name" 
                            placeholder="Ваше ФИО" 
                            value={name}/>

                            <input type="tel" name="phone" 
                            placeholder="+7 (999)-999-99-99 " 
                            value={phone}/>

                            <input type="text" 
                            name="telgram" 
                            placeholder="Ваш аккаунт телеграм" 
                            value={telegram}/>

                            <textarea name="textarea" 
                            id="" 
                            placeholder="Опишите вашу проблему"
                            value={message}/>
                            <label htmlFor="">
                                <input type="checkbox" name="checkbox" id="" />
                                Нажимая на кнопку, Вы принимаете <a href="!#">условия обработки персональных данных</a>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    }
}
export {Form};