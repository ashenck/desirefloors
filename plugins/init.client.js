export default function({ store, redirect, route, app }) {
    console.log("HEREEREW");
    const user = localStorage.getItem('userData')
    console.log(user);
    const loggedStatus = store.getters['isLoggedIn']
   
  
    if (!user) {
        app.router.push("/login");
      return redirect('/login')
    }
  }