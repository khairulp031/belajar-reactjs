import React from 'react';
import { useContext } from '../base/hooks/context'
import { getToken, postLogin, logout, postSekolah } from './services'
import { ActionType } from '../base/hooks/reducer'

function Login() {
  const [store, dispatch] = useContext()
  const [username, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')
  React.useEffect(() => {
    getToken(dispatch)
  }, [])
  const onClickLoginBtn = async () => {
    if (username.length && password.length) {
      const response = await postLogin({ username, password })
      dispatch({
        type: ActionType.SET_USER,
        data: { user: { username: response.data.username } }
      })
    }
  }
  const onClickLogoutBtn = async () => {
    if (username.length && password.length) {
      const response = await logout(dispatch)
    }
  }
  const onClickSekolahBtn = async () => {
    const response = await postSekolah({ nama: "xyz", SD: "SDN 1" })
  }
  if (!store.csrf) {
    return "Loading..."
  }
  return (
    <>
      <h1>Login</h1>

      {
        store.user && store.user.username ?
          <>
            <section>
              <button onClick={onClickLogoutBtn}>Logout</button>
            </section>
            <section>
              <button onClick={onClickSekolahBtn}>Sekolah</button>
            </section>
          </>
          :
          <>
            <section>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </section>
            <section>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </section>
            <section>
              <button onClick={onClickLoginBtn}>Login</button>
            </section>
            <section>
              <button onClick={onClickSekolahBtn}>Sekolah</button>
            </section>
          </>
      }
    </>
  );
}

export default Login;
