import { h, app } from 'hyperapp'

export default function Header( { state, actions } )
{
    return (
        <header>
            <div class="logo">
                logo
            </div>
            <nav>
                <a href="#">Home</a>
                <a href="#">Party Platters</a>
                <a href="#">Locations</a>
                <a href="#">Rewards</a>
                <a href="#">Reservations</a>
            </nav>
       </header>
    )
}
