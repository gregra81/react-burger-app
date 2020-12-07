import classes from './Layout.module.css'

const Layout = ( {children} ) => {
    return (
        <>
            <div className={classes.Content}>
                Toolbar, SideBar, Backdrop
            </div>
            <main>
                {children}
            </main>    
        </>
    )
}

export default Layout;