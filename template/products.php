<h1>Products:</h1>

<div class="products">
    <?php foreach ($products as $value): ?>
        <div class="product-card">
            <a href="details/?id=<?= $value['id'] ?>">
                <h3><?=$value['name']?></h3>
                <img src="<?="/images/" . $value['image']?>" />
                <span class="product-card__price"> <?= $value['price'] ?> руб.</span>
            </a>
        </div>
    <?php endforeach; ?>
</div>