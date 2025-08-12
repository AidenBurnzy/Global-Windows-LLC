// Mobile menu functionality
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navbar = document.getElementById('navbar');
const navList = document.getElementById('nav-list');

if (mobileMenuToggle && navbar) {
  mobileMenuToggle.addEventListener('click', () => {
    navbar.classList.toggle('mobile-menu-open');
    mobileMenuToggle.classList.toggle('active');
  });

  // Close mobile menu when clicking on a nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('mobile-menu-open');
      mobileMenuToggle.classList.remove('active');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      navbar.classList.remove('mobile-menu-open');
      mobileMenuToggle.classList.remove('active');
    }
  });
}

// Reflection data
const reflections = [
  {
    title: '"Today, I Breathe You In"',
    content: `Today, I woke up wrapped in light,
Love in the air, and power in flight.
I breathed—and You were already there,
In the silence, in the sky, in the soul of the air.

I see You, Father, in all that You do—
Feeding the sparrow, painting the dew.
Warming the earth with the sun's steady flame,
Calling me gently, whispering my name.

You handle the world with patient control,
Yet still You pause to nourish my soul.
You crafted the breath that fills my chest—
And in Your presence, I find my rest.

Thank You for the woman beside me each day,
With a love that reflects You in every way—
Her kindness, her patience, her mercy so wide,
A mirror of grace You placed at my side.

You, Father, are the man I long to become,
Strong in Your truth, humble and undone.
A son learning daily to lead and to bend,
To love without limit, to serve without end.

So today—I breathe You in.
Today—I rise again.
Not in my power, but Yours alone—
My Heavenly Father, my anchor, my home.`,
    verse: 'Kelly Clarkson - Listen to your heart',
    link: 'https://www.youtube.com/watch?v=ycO7jS__NVg&t=1s'
  },
  {
    title: '"Still other seed fell on good soil"',
    content: `Reflection

Have you ever listened to a sermon, a worship song, or someone's testimony and felt like it was meant just for you? It hit a place deep inside you. But other times, even the most powerful truth seems to bounce right off your heart. Why does that happen?

The answer often lies in the condition of the heart.

Sometimes our hearts are so full—of pain, disappointment, grief, bitterness—that there's no room left for God's Word to take root. It's not that we don't want to hear; it's that we can't. The soil of our heart has been hardened by life. In those moments, we need healing more than instruction.

The enemy loves to plant lies in our hearts—lies about our worth, about God's love, about forgiveness. Those lies grow like weeds and choke out truth.

But here's the good news: God is the Master Gardener. He can heal any heart, no matter how broken. And sometimes, He invites us to help tend to the hearts of others. That starts not with preaching, but with compassion—with understanding what someone has been through, seeing their pain, and gently helping them clear space for God to work.

Everyone has a story. Their heart condition is part of their testimony. And when love and truth are planted with care, God can bring a harvest out of even the hardest ground.

Challenge

This week, ask God to show you someone whose heart might be hurting or hardened. Instead of offering answers, offer presence. Be the one who listens, understands, and reflects Christ's patience. You may be the one preparing their heart to receive the truth.

Also, reflect on your own heart. Is there pain or bitterness that's crowding out God's Word? Invite Him to do some spiritual gardening.

Prayer

Lord, soften my heart. Pull up the weeds of pain, lies, and bitterness. Help me receive Your Word with faith and joy. Show me how to love others enough to understand their pain and help prepare their hearts for You. Thank You for never giving up on broken soil. In Jesus' name, amen.`,
    verse: 'In The Air Tonight - Phil Collins',
    link: 'https://www.youtube.com/watch?v=CFDFX4Ao-UY'
  },
  {
    title: '"Standing on my own two feet"',
    content: `Standing on my own two feet There are moments in life when we can't even remember standing on our own two feet—because we weren't. Those were the times Jesus was carrying us through the storms, through the battles waged by the enemy. The devil, the god of this world, will whisper lies: You're a failure. You don't deserve a good life because of your past. He uses shame to blind your mind and keep you from the truth.

But here's what God says: I knew you before you were even formed in the womb. I saw your flaws, your mistakes, your struggles—and I still chose to love you. His love is unconditional. No price tag. No conditions.

So ask yourself—do you love others this way? Or does your love come with strings attached? Jesus paid the price in advance so we wouldn't have to. When we can't stand, He carries us. When we're lost, He sends someone to lift us up. He is leading us to the cross, but shame tries to convince us we don't deserve forgiveness.

And here's the truth: We don't. That's the beauty of grace. It's not about deserving—it's about receiving.

Jesus leads by example, and so should we. Love without conditions. Lift those who are struggling. Carry them to the cross, just as Christ carried us.

Love wins. Every time.

This world is broken, but one person at a time, we can bring it back to the vision of God's plan.

Love you all.`,
    verse: "Staind - It's Been Awhile",
    link: 'https://www.youtube.com/watch?v=araU0fZj6oQ'
  },
  {
    title: 'Alone Again',
    content: `Alone again Do you ever feel like you're surrounded by loved ones but still feel alone inside? You're screaming for help, saying, "Here I am! I'm in pain!" All you need is for someone to acknowledge your existence, but instead, you're met with silence. Why can't they see the pain in your heart? Sometimes, you need to be alone and reach out to our Heavenly Father, who tells you, "I see your pain, and I acknowledge you. I hear your cries for love." Your flaws are a result of dealing with a world that's wronged you. If someone would just say, "I see you," it would make a big difference. If you don't have a Heavenly Father, where do you turn? If you've felt this way, know that the Lord knows I have. I don't think I could handle people's coldness; it's always about them. But with God, it's about you. Thank you, Jesus, for being with me tonight; I know I'm not alone. Thank you for showing me love; I couldn't make it without you.`,
    verse: 'Dokken - Alone Again',
    link: 'https://www.youtube.com/watch?v=PHgY53QXTyA'
  },
  {
    title: 'Understanding',
    content: `Bible understanding I sometimes wonder why many people don't understand the Bible, yet I do. What is special about me that I have this gift?

Understanding.

I have spent years studying it, reading it, and living it. Now, in all things, I see how Jesus works in my life. It's similar to our careers—I have spent decades honing my craft. But if I were to ask my son, who works with data, to install a window, he would be lost. He does not have the understanding.

It takes years to master a craft, whether in our careers or as stewards of Jesus Christ, learning to understand His master plan for our lives. Until we gain that understanding, the devil can create friction and wear in our lives.

Think about an engine. We can see every part operating: the crank spinning, driving the pistons as they rotate. The camshaft, linked to a timing chain, is set perfectly to drive the lifters, which move the pushrods, opening and closing the valves. The distributor gears spin in perfect sync with the ignition system. At just the right moment, the spark plugs fire, igniting the air-fuel mixture, which drives the pistons.

But what happens when the crank spins too slowly? When the camshaft is offset? When the plugs don't fire?

We damage the parts, and inevitably, the motor will die.

The devil is putting wear on us—God's most amazing creation. We need to do the maintenance—read the Bible—to keep that wear from destroying our lives. We may not fully understand His Word, but we can all recognize where the devil has caused damage.

Thankfully, we can always turn to God's mechanics—those who have studied the inner workings of His great masterpiece—to help guide us back to Him.`,
    verse: 'Bryan Adams - A Little More Understanding',
    link: 'https://www.youtube.com/watch?v=avMSEjtOjR0&list=RDavMSEjtOjR0&start_radio=1'
  },
  {
    title: 'The author of time',
    content: `Time

Put some earbuds in and listen to the words. Turn it up—loud. Louder.

God is the author of time. You get a check every day—the same check goes out to everyone. You have a choice in what you do with it: waste it, invest it, or multiply it.

Jesus said, "I am the way, the truth, and the life." He is the way to God. Stop wasting time. I challenge you to start that relationship with Him today before it's too late. Tomorrow's check might bounce. But know this—God does not write a check He can't cash.

My mother loved Pink Floyd. I took her to the Momentary Lapse of Reason tour—she was the designated driver. We had a very challenging relationship, but I chose unconditional love.

My mother knew Jesus but not His promises, so she lived her life in bondage. She did her best, but this world destroyed her hope. I wish I could go back and teach her about God's promises.

Do you know someone living in bondage? If you have the keys to the Kingdom, open the door for them. Don't wait until tomorrow.

Thank you, Mother, for teaching me through watching you. Even as a child, I knew this couldn't be God's plan—there was too much pain and hate. I saw the sacrifices you made for me, and I love you for them.

We are all human, just doing the best we can. But the Bible is the book of life, and it will show you the way.
David Gilmour - "TIME" Live in Pompeii 2016`,
    verse: 'David Gilmour - "TIME"',
    link: 'https://www.youtube.com/watch?v=AukADw4m7CE'
  }
];

// Reflection bubble functionality
document.addEventListener('DOMContentLoaded', function () {
  const bubbles = document.querySelectorAll('.reflection-bubble');
  const modal = document.getElementById('reflection-modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  // Add click event to each bubble
  bubbles.forEach(bubble => {
    bubble.addEventListener('click', function () {
      const reflectionIndex = parseInt(this.dataset.reflection);
      const reflection = reflections[reflectionIndex];
      
      // Populate modal content
      modalBody.innerHTML = `
        <div style="text-align: center; max-width: 700px; margin: 0 auto; padding: 1rem;">
          <h2 class="modal-writing-title" style="margin-bottom: 1.5rem;">${reflection.title}</h2>
          <div class="modal-writing-verse" style="margin-bottom: 2rem; padding: 1rem; background: linear-gradient(135deg, #f8f9fa, #e9ecef); border-radius: 10px; border-left: 4px solid #27ae60;">
            <a href="${reflection.link}" target="_blank" style="color: #27ae60; text-decoration: none; font-weight: 600; font-size: 1.1rem; display: inline-block; padding: 0.5rem 1rem; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: all 0.3s ease;">🎵 ${reflection.verse}</a>
          </div>
          <div class="modal-writing-content" style="text-align: left; font-family: 'Georgia', 'Times New Roman', serif; font-size: 1.1rem; line-height: 1.8; color: #333; white-space: pre-line; background: #fafafa; padding: 2rem; border-radius: 12px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);">${reflection.content}</div>
        </div>
      `;
      
      // Show modal
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal functionality
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  modalClose.addEventListener('click', closeModal);

  // Close modal when clicking outside content
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Back to top functionality
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
