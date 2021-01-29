<?php
if (!empty($_POST["submitNewUser"])) {
    createNewUser($_POST["newUserPseudo"], $_POST["newUserEmail"], $_POST['newUserPsw']);
    creatUserAvatar();
    creatUserClan();
    creatUserRessources();
    creatUserPosition();
    creatUserAttack();
    createUserDefense();

//TODO repair this sql request :
//"INSERT INTO `user_has_all`(
//     username,
//     email,
//     password,
//     faceShape,
//     bodyShape,
//     clan,
//     clanColor,
//     position_x,
//     atk_activated,
//     dfs_activated
// )
// INNER JOIN attack ON user_has_all.fk_id_attack=attack.id_atk
// INNER JOIN defense ON user_has_all.fk_id_defense=defense.id_dfs
// INNER JOIN avatar ON user_has_all.fk_id_avatar=avatar.id_character
// INNER JOIN clan ON user_has_all.fk_id_clan=clan.id_clan
// INNER JOIN map_position ON user_has_all.fk_id_position=map_position.id_position
// INNER JOIN users ON user_has_all.fk_id_user=users.id_user
// VALUES('jeannot','jeannot@coucou.be','coucou','square','square','hopper','blue','49','true','false'
// )"
}
?>

<nav>
    <a href="./index.php">Log in</a>
</nav>

<h1>Create a new user </h1>
<form class="editingForm" method="POST">
    <h2>User</h2>
    <label for="newUserPseudo">Pseudo</label>
    <input id="newUserPseudo" name="newUserPseudo" type=" text" placeholder="What's your Pseudo ?" required>

    <label for="newUserEmail">Email</label>
    <input id="newUserEmail" name="newUserEmail" type="email" placeholder="What's your email ?" required>
    <label for="newUserPsw"> Password</label>
    <input id="newUserPsw" name="newUserPsw" type="password" placeholder="What's the new User password ?" required>
    <label for="newUserClan">Clan</label>
    <select id="newUserClan" name="newUserClan" type="text" required>
        <option value="hopper">Hopper - Brussels</option>
        <option value="schwartz">Schwartz - Brussels</option>
        <option value="johnson">Johnson - Brussels</option>
    </select>
    <h2>Avatar</h2>
    <label for="newUserAvatarFace">Face</label>
    <select id="newUserAvatarFace" name="newUserAvatarFace" type="text" required>
        <option value="square">Square</option>
        <option value="triangle">Triangle</option>
        <option value="round">Round</option>
    </select>
    <label for="newUserAvatarBody">Body</label>
    <select id="newUserAvatarBody" name="newUserAvatarBody" type="text" required>
        <option value="square">Square</option>
        <option value="triangle">Triangle</option>
        <option value="round">Round</option>
    </select>


    <input type="submit" name="submitNewUser" value="submit">
</form>