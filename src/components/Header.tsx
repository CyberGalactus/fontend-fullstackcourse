import auth from "../routes/lib/auth";
import Link from "next/link";
import classes from ""


const Header = () => {
    const isAuthenticated = auth.isSignedIn();
    const fetcher = userFetcher();

    return (

        <div className={classes.header}>
        <h1>ChangedIt</h1>
        <div className={classes.headerActions}>
            { isAuthenticated ?
                <fetcher.Form method='post' action="/sign out">
                    <button type="submit">Sign Out</button>
                </fetcher.Form>
                :
                <>
                <Link to="/sign-up">
                <button>Sign up</button>
            </Link>
            <Link to="/sign-in">
                <button>Sign in</button>
            </Link>
                </>
            }
        </div>
        </div>
    )

}

export default Header;