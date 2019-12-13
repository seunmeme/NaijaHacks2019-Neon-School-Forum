import React from 'react'
import './DiscussionCard.scss'

const DiscussionCard = () => (
  <div className="discussion-section">
    <div className="discussion-card">
      <div className="discussant-img">
        <img
          src="https://res.cloudinary.com/dx0nauane/image/upload/v1576065923/avatar.jpg"
          alt="discussant"
        />
        <p>2 days ago</p>
      </div>
      <div className="discussion">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae asperiores consectetur voluptas fuga reiciendis mollitia adipisci praesentium sed. Explicabo a iste molestias cumque impedit temporibus rem ducimus pariatur, laudantium maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, fugiat quisquam repellendus illum inventore omnis facere! Voluptatem quae ipsam suscipit deserunt Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda facilis expedita a cumque aut minus deleniti sed vero dolore praesentium, placeat, aperiam itaque voluptatibus est consectetur nostrum. Nam laboriosam est laborum beatae, voluptates molestias velit ut. Distinctio laboriosam fugit quibusdam nam ducimus officiis placeat eligendi similique saepe ipsam nobis, repellendus impedit deleniti hic quod soluta, recusandae rem laudantium inventore quas harum perferendis. Aut sint, temporibus corporis consectetur perferendis doloremque exercitationem accusantium labore, ipsum voluptate asperiores excepturi alias saepe tenetur natus! Culpa voluptatum laudantium amet temporibus, eveniet soluta illo accusamus laboriosam impedit quod sint molestias enim unde maiores? Est, odio. Porro molestiae dolor odit, quibusdam consequatur earum, reiciendis, amet dolorum labore sunt aliquam nisi repellendus alias. Dolore iste et dolor quis reiciendis perferendis, rerum harum at! Deleniti illum rerum quae unde asperiores id. Sequi error odit quidem soluta officiis minus esse minima quae tempore! Voluptatum illo dicta aperiam, quae quas dolorum iure accusantium repellat temporibus ex voluptatibus facere aut corporis praesentium laborum saepe tempore est perferendis molestias accusamus rem atque. Nesciunt, cumque unde, amet cum, ad facere magni rerum nam similique impedit nemo natus. Placeat quas nisi earum distinctio deleniti corporis praesentium laudantium assumenda officia expedita, quam laboriosam explicabo maiores aliquam!</p>
      </div>
    </div>
    <div className="comment-pane">
      <p className="add-comment">add comment</p>
      <div className="comment-section">
        <p><span>@tobi</span> - Lorem ipsum dolor sit amet consectetur.</p>
        <p><span>@titi</span> - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
  </div>
)

export default DiscussionCard;
