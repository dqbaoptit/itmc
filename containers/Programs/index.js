import { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import dedent from 'dedent';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import './index.scss';

import { SubmitReq, GetSubmit } from './actions';

require('prismjs/components/prism-c');

export default function Programs() {
  const inititalState = `
  #include<iostream>
  using namespace std;
  int main(){
    int a,b;
    cin >> a;
    cin >> b;
    cout << a +b;
  }
  `;

  const [state, setState] = useState({
    code: dedent`${inititalState}`,
  });
  const [token, setToken] = useState('');
  const [subBody, setSubBody] = useState({
    language_id: 54,
    stdin: '',
    source_code: '',
  });
  const [response, setResponse] = useState('3');

  useEffect(() => {
    setSubBody({ ...subBody, source_code: state.code });
  }, [state.code]);

  const handleSubmit = () => {
    SubmitReq(JSON.stringify(subBody))
      .then((res) => setToken(res.token))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      GetSubmit(token)
        .then((res) => {
          if (res.status.description !== 'Processing') setResponse(res.stdout);
          else {
            setTimeout(() => {
              GetSubmit(token)
                .then((res2) => setResponse(res2.stdout))
                .catch((error) => console.log(error));
            }, 5000);
          }
        })
        .catch((err) => console.log(err));
    }, 1500);
    return () => clearTimeout(timeout);
  }, [token]);

  return (
    <>
      <div className="ide-container">
        <div>
          <div
            className="tab-editor"
            style={{ height: 20, backgroundColor: '#000', textAlign: 'left' }}
          >
            <strong style={{ color: '#fff' }}>Editor</strong>
          </div>
          <Editor
            className="code-editor"
            placeholder="Input your code..."
            value={state.code}
            highlight={(code) => highlight(code, languages.c)}
            onValueChange={(code) => setState({ code })}
            padding={15}
          />
          <div className="button-run" onClick={handleSubmit}>
            Run code
          </div>
        </div>
        <div className="handle-ide-container">
          <div
            className="tab-editor"
            style={{ height: 20, backgroundColor: '#000', textAlign: 'left' }}
          >
            <strong style={{ color: '#fff' }}>stdin</strong>
          </div>
          <textarea
            className="ide-stdin"
            value={subBody.stdin}
            onChange={(e) => setSubBody({ ...subBody, stdin: e.target.value })}
            placeholder="Input.."
          />
          <div className="ide-stdout">
            <div
              className="tab-editor"
              style={{ height: 20, backgroundColor: '#000', textAlign: 'left' }}
            >
              <strong style={{ color: '#fff' }}>stdout</strong>
            </div>
            <textarea className="stdout" disabled value={response} />
          </div>
        </div>
      </div>
    </>
  );
}
