import {useEffect, useState} from 'react';
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (email: string): boolean => {
  const [mail, setMail] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    setMail(email);
    setValid(re.test(String(mail).toLowerCase().trim()));
  }, [email]);

  return valid;
};
