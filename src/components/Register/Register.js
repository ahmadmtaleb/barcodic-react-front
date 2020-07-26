import React, {Component} from "react";
import "./Register.css";

class Register extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            currencies_list: [],
            name:'',
            email: '',
            password: '',
            currency_id: ''
        }
    }
    async componentDidMount() {
        const response = await fetch('http://127.0.0.1:8000/api/currencies/');
        const json = await response.json();

        if (json.success === true) {
            this.setState({
                currencies_list: json.data
            })
        }
    }


    onNameChange(event)
    {
        this.setState({name:event.target.value})
    }
    onNameClickHanlder (event)
    {
        var popup = document.getElementById("namePopup_ah");
        popup.classList.toggle("show");
    }

    onEmailChange(event)
    {
        this.setState({email:event.target.value})
    }
    onEmailClickHanlder (event)
    {
        var popup = document.getElementById("emailPopup_ah");
        popup.classList.toggle("show");
    }

    onPasswordChange(event)
    {
        this.setState({password:event.target.value})
    }
    onPasswordlClickHanlder (event)
    {
        var popup = document.getElementById("passwordPopup_ah");
        popup.classList.toggle("show");
    }

    onRePasswordlClickHanlder (event)
    {
        var popup = document.getElementById("repasswordPopup_ah");
        popup.classList.toggle("show");
    }

    onCurrencyChange(event)
    {
        this.setState({currency_id:event.target.value})
    }
        
    async handleSubmit(event)
    {
        event.preventDefault();

        
        try 
        {
            const response = await fetch(`http://127.0.0.1:8000/api/register/?name=${this.state.name}&email=${this.state.email}&password=${this.state.password}&currency_id=${this.state.currency_id}`, {
                method: 'POST'
            });
            const result = await response.json();
            if (result.success) 
            {
                console.log("done")
                alert("Your account has successfully been created! \n You can Log In now!");
                this.setState({
                    name:'',
                    email: '',
                    password: '',
                    currency_id: ''
                })
            } 
            else 
            {
                console.log("error")
            }
        } 
        catch (err) 
        {
            console.log('err', err)
            alert("Your account has not been created! \n Please re-fill with all the exact information.");
        } 
    }

    render()
    {
        return(
            <div className="register_body_container_ah">

                <div className="register_form_text_ah">
                    <h2>Create an account <div><br /> Sign Up and control your expenses for free.</div></h2>
                </div>

                <form id="register_form_container_ah" method="post" onSubmit={this.handleSubmit.bind(this)} >

                    <div className="register_form_group_ah">
                        <label htmlFor="name_ah" className="popup_ah">
                            <input id="name_ah" type="text" placeholder="Name" className="register_form_group_item_ah" value={this.state.name} onChange={this.onNameChange.bind(this)} onClick={this.onNameClickHanlder} required/>
                            <span class="namepopuptext_ah" id="namePopup_ah">What's your name?</span>
                            </label>
                    </div>
                        
                    <div className="register_form_group_ah">
                        <label htmlFor="email_ah" className="popup_ah">
                            <input id="email_ah" type="email" aria-describedby="emailHelp" placeholder="Email address" className="register_form_group_item_ah" required onChange={this.onEmailChange.bind(this)} onClick={this.onEmailClickHanlder}/>
                            <span class="emailpopuptext_ah" id="emailPopup_ah">You'll use this when you log in and if you ever need to reset your password.</span>
                            </label>
                    </div>

                    <div className="register_form_group_ah">
                        <label htmlFor="password_ah" className="popup_ah">
                            <input id="password_ah" type="password" aria-describedby="password" placeholder="Password" className="register_form_group_item_ah" required  onChange={this.onPasswordChange.bind(this)} onClick={this.onPasswordlClickHanlder}/>
                            <span class="passwordpopuptext_ah" id="passwordPopup_ah">Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &).</span>
                        </label>
                    </div>
                    
                    <div className="register_form_group_ah">
                        <label htmlFor="re-password_ah" className="popup_ah">
                            <input id="re-password_ah" type="password" aria-describedby="password" placeholder="Re-enter password" className="register_form_group_item_ah" required onClick={this.onRePasswordlClickHanlder}/>
                            <span class="repasswordpopuptext_ah" id="repasswordPopup_ah">Re-enter the same password</span>
                        </label>
                    </div>    
                    
                    <div className="register_form_group_ah">
                        <label for="currency_form_area_ah"></label>
                            <select id="currency_form_area_ah" name="currency" className="register_form_group_item_ah" required onChange={this.onCurrencyChange.bind(this)}>
                                <option>Choose your Currency</option>
                            {
                                this.state.currencies_list.map(currency => {
                                    return <option key={currency.id} value={currency.id}>{currency.code}</option>
                                })
                            }
                            </select>

                    </div>
                    <div className="register_form_group_ah">
                        <p className="register_form_group_textitem_ah">
                            By clicking Sign Up, you agree to our<div><br /></div> <a href="#" target="_blank" className="register_form_links_ah">Terms</a>, <a href="#" target="_blank" className="register_form_links_ah">Data Policy</a> and <a href="#" target="_blank" className="register_form_links_ah">Cookie Policy</a>.
                        </p>
                    </div>
                        <button type="submit" id ="register_submit_btn_ah">Sign Up</button>
                </form>
                <div>
                        <p className="register_form_slogan_ah"> Grow <div><br /></div>Financially</p>
                </div>
                
            </div>
        );
    }
}

export default Register;