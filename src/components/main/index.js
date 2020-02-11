import { h } from 'preact';
import { useState } from 'preact/hooks';

// import { fetchHtml } from '../../lib';
import Input from '../input';

const reg = /^\d+$/;

const checkValue = value => {
  return (
    (value && value.length > 1 && value.length < 10 && reg.test(value)) || false
  );
};

const openEng = async (state, setState, setError) => {
  let value;

  if (state.asset) {
    if (checkValue(state.asset)) value = state.asset;
    else {
      setError({ control: 'asset', error: 'Neispravan asset' });
      return;
    }
  } else if (state.telefon) {
    if (checkValue(state.telefon)) value = state.telefon;
    else {
      setError({ control: 'telefon', error: 'Neispravan telefon' });
      return;
    }
  } else {
    setError({ control: 'asset', error: 'Neispravan asset' });
    return;
  }

  setState({ asset: '', telefon: '' });

  value &&
    window.open(
      `https://kdr21.ip.t-com.hr/Eng/Login?PAGE_ID=ServiceAdminSearch&lang=hr&search=${value}&QUICK=${value}`,
      '_blank'
    );
};

const Form = () => {
  const [state, setState] = useState({ asset: '', telefon: '' });
  const [error, setError] = useState({ control: '', error: '' });

  const onInputHandler = e => {
    const { id, value } = e.target;
    setState(state => ({ ...state, [id]: value }));

    error.control && setError({ control: '', error: '' });
  };

  const onKeyPressHandler = e =>
    e.key === 'Enter' && openEng(state, setState, setError);

  const onClickHandler = () => openEng(state, setState, setError);

  return (
    <main class="container mt-3 mt-md-4 mt-xl-5">
      <div class="row justify-content-center justify-content-md-start">
        <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
          <div class="card shadow">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-12">
                  <Input
                    label="Unesite asset"
                    id="asset"
                    value={state.asset}
                    onInput={onInputHandler}
                    placeholder="asset"
                    error={error.control === 'asset' ? error.error : ''}
                    onInput={onInputHandler}
                    onKeyPress={onKeyPressHandler}
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12">
                  <Input
                    label="Unesite telefon"
                    id="telefon"
                    value={state.telefon}
                    placeholder="telefon"
                    error={error.control === 'telefon' ? error.error : ''}
                    onInput={onInputHandler}
                    onKeyPress={onKeyPressHandler}
                  />
                </div>
              </div>

              <div class="row">
                <div class="col text-center text-sm-left">
                  <div class="form-group">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      onClick={onClickHandler}
                    >
                      Pretraga
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* {resPretrage} */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Form;
