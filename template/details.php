<h2><?=$info['name']?></h2>

<div class="product-details">
     <div class="product-card">
        <a href="details/?id=<?= $product['id'] ?>">
            <h3><?=$product['name']?></h3>
            <img src="<?="/images/" . $product['image']?>" />
            <span class="product-card__price"> <?= $product['price'] ?> руб.</span>
        </a>
    </div> 
    
    
    <h2>Отзывы на товар: <?=$product['name']?></h2>
    <form action="/details/add/?id=<?=$product['id']?>" method="post">
        Оставить отзыв: <br>
        <input type="text" name="name" placeholder="Name"><br>
        <input type="text" name="message" placeholder="Feedback"><br>
        <input type="number" name="product" hidden value="<?= $product["id"] ?>">
        <input type="submit" value="Paste">
    </form>
    
    <div class="product-details-feedbacks">
        <?php foreach ($info as $value): ?>
            <div class="product-details-feedbacks__card">
                <span class="author">Name: <?=$value['name']?></span>
                <span class="text">Feedback: <?= $value['answer'] ?></span>
                <input type="button" value="Delete" class="product-details-feedbacks__card-button" onClick="document.location.href='delete/?id=<?=$value['id']?>'" />
            </div>
        <?php endforeach; ?>
    </div>
</div>