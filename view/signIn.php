<nav>
    <a href="./index.php">Log in</a>
</nav>

<h1>Create a new user </h1>
<form class="editingForm" method="POST">
    <label for="newUserPseudo">Pseudo</label>
    <input id="newUserPseudo" name="newUserPseudo" type=" text" placeholder="What's your Pseudo ?" required>

    <label for="newUserEmail">Email</label>
    <input id="newUserEmail" name="newUserEmail" type="email" placeholder="What's your email ?" required>
    <label for="newUserClan">Clan</label>
    <select id="newUserClan" name="newUserClan" type="text" required>
        <option value="hopper">Hopper - Brussels</option>
        <option value="schwartz">Schwartz - Brussels</option>
        <option value="johnson">Johnson - Brussels</option>
    </select>
   
    <label for="newUserPsw"> Password</label>
    <input id="newUserPsw" name="newUserPsw" type="password" placeholder="What's the new User password ?" required>
    <input type="submit" name="submitNewUser" value="submit">
</form>