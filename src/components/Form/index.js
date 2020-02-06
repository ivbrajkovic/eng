import { h } from 'preact';
import { useState } from 'preact/hooks';

const reg = /^\d+$/;

const checkAsset = asset => {
  return asset.length > 1 && asset.length < 10 && reg.test(asset);
};

const trazi = (asset, setAsset, setError) => {
  const valid = (asset && checkAsset(asset)) || false;
  if (valid) {
    setAsset('');
    setError('');
    window.open(
      `https://kdr21.ip.t-com.hr/Eng/Login?PAGE_ID=ServiceAdminSearch&lang=hr&search=${asset}&QUICK=${asset}`,
      '_blank'
    );
  } else setError('Neispravan asset!');
};

const Form = () => {
  const [asset, setAsset] = useState();
  const [error, setError] = useState();

  return (
    <div class="container mt-3 mt-md-4 mt-xl-5">
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
          <div class="card shadow">
            <div class="card-body">
              <div class="form-group row">
                <div class="col-sm-12">
                  <label for="asset" class="col-form-label">
                    Unesite asset
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="asset"
                    placeholder="asset"
                    value={asset}
                    onInput={e => setAsset(e.target.value)}
                  />
                  {error && (
                    <small id="emailHelp" class="form-text text-muted ">
                      {error}
                    </small>
                  )}
                </div>
              </div>

              <div class="form-group row">
                <div class="col text-center text-sm-left">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={() => trazi(asset, setAsset, setError)}
                  >
                    Pretraga
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
