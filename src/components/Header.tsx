import { Link, useFetcher } from 'react-router-dom';
import classes from './Header.module.css';
import auth from '../lib/auth';

const Header = () => {
    const isAuthenticated = auth.isSignedIn();
    const fetcher = useFetcher();

    return (
        <div className={classes.header}>
            <Link to="/"><h1>Changedit</h1></Link>
            <div className={classes.headerActions}>
                {isAuthenticated ?
                    <>
                        <Link to="/create-post" >
                            <button>New post</button>
                        </Link>
                        <fetcher.Form method='post' action='/sign-out'>
                            <button type='submit'>Sign out</button>
                        </fetcher.Form>
                    </>
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