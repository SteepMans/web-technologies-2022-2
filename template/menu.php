<?php if ($auth): ?>
Добро пожаловать <?=$name?>, <a href="/logout">[Выход]</a>
<?php else: ?>
<form action="/login" method="post">
    <input type="text" name="login">
    <input type="text" name="pass">
    save? <input type="checkbox" name="save">
    <input type="submit">
</form>
<?php endif; ?>

<a href="/">Главная</a>
<a href="/products">Каталог</a>
<br>
