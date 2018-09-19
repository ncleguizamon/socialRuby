import React  from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import {Base , styles } from './base';


export class Login extends Base{

    render(){
      return ( 
           <MuiThemeProvider>
            <Formsy.Form onValid={()=> this.enableSubmitBtn()}
                        onInvalid={()=> this.disableSubmitBtn()} >
               <p>{this.state.email}</p>
                <div>
                    <FormsyText
                    onChange={(e)=> this.syncField(e, "email")}
                    name="email"
                    required
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    validations="isEmail"
                    validationError="Asegúrate de introducir un correo electronico valido"
                    floatingLabelText="Correo electronico" />
                </div>
                <div>
                    <FormsyText
                      onChange={(e)=> this.syncField(e, "password")}
                    name="password"
                    required
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    type="password"
                    floatingLabelText="Contraseña" />
                </div>
                <div>
                    <RaisedButton
                    style={styles.buttonTop}
                    disabled={!this.state.canSubmit}
                    backgroundColor={styles.red}
                    type="submit"
                    label="Iniciar Sessión"
                    />
                      <a href="#" style={styles.leftSpace} >Crear cuenta</a>
                </div>
            </Formsy.Form>
        </MuiThemeProvider>
      );
    }

}
