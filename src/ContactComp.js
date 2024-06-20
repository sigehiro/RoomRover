import { useState } from 'react';

function ContactComp() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [text, setText] = useState("")


    function changeName(event){
        setName(event.target.value)
    }

    function changeAge(event){
        const value = event.target.value

        if (!Number(value) && value !== ""){
            alert("Input value must be a number")
        } else {
            setAge(value)
        }
    }

    function changeText(event){
        setText(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault()

        const numberValue = parseInt(age)
        if(numberValue >=30 && numberValue <= 100){
            alert("Name: " + name  + " Age: " + age + " Text: " + text)
        }else{
            alert("Age must be between 18 and 100")
        }
    }

    return (
        <div className='Contact' style={{ backgroundColor: '#f4f4f4',
                                        color: '#333',
                                        textAlign: 'center',
                                        width: '50%',
                                        margin: '0 auto' }}>
            <form onSubmit={submitHandler} style={{marginBottom: '100px',paddingBottom: '50px'}}>
    
                <h1 style={{ color: '#007bff', marginBottom: '20px', paddingTop: '40px'}}>Enter the contact information</h1>
                <p>{name}<br />{age}<br />{text}</p>
    
                <h2 style={{ color: '#333' }}>Enter your name</h2>
                <input value={name} onChange={changeName} type='text' placeholder='name'
                style={{ width: '75%', padding: '8px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />

                <h2 style={{ color: '#333' }}>Enter your age</h2>
                <input value={age} onChange={changeAge} type='text' placeholder='During 18~100'
                style={{ width: '75%', padding: '8px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />

                <h2 style={{ color: '#333' }}>Enter some text</h2>
                <input value={text} onChange={changeText} type='text' placeholder='contact'
                style={{ width: '75%', padding: '8px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
    
                <button type="submit" style={{ padding: '8px 20px',
                                               backgroundColor: '#007bff',
                                               color: '#fff',
                                               border: 'none',
                                               borderRadius: '5px',
                                               cursor: 'pointer',
                                               marginTop: '20px' }}
                >submit</button>
            </form>
        </div>
    );
    
}

export default ContactComp;
