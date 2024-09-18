export const ANIMATION = {
  STEP: 0.2,
};

export const FAQ_LIST = [
  {
    question: 'How is TYMIO pronounced?',
    answer: `It's pronounced the same as “time”, but with an -io at the end. Here is the transcription: /taɪmioʊ/.`,
  },
  {
    question: 'What do I need to earn yield with TYMIO?',
    answer: `To start earning, you'll need either ETH or WBTC to sell, or USDC to purchase ETH or WBTC. For transactions, you can utilize MetaMask or any wallet compatible with WalletConnect, operating on either the Ethereum or Arbitrum chains.`,
  },
  {
    question: 'How is the TYMIO yield generated?',
    answer: `We utilize options liquidity venues, both DEX and CEX, to implement low-risk option strategies, such as selling covered calls or cash-secured puts. These strategies are familiar to professional derivative traders. TYMIO democratizes this process, allowing everyone—not just professionals—to benefit from the high APR yielded by the crypto options markets. Moreover, we shoulder all the risks since your funds remain within the smart contract. We employ our own funds to generate the yield.`,
  },
  {
    question: 'Where does the yield come from, or simply, "who is losing"?',
    answer: `The yield is derived from option traders who speculate on low-probability events involving substantial price fluctuations, either upwards or downwards. They buy put or call options and pay a premium for the potential of leveraged gains from aggressive price movements. TYMIO's yield is essentially sourced from the option premiums collected when selling these options to the speculators.`,
  },
  {
    question: 'Why is a high yield possible?',
    answer: `For SELL HIGH: The market compensates you for holding assets and capping your upside potential.
      <br/><br/>
      If you commit to selling your asset at a predetermined price, it means your earning potential is limited to that price plus the yield. By setting a ceiling on your profits from price appreciation, the market rewards you for this limitation, letting you earn a defined yield.
      <br/><br/>
      Example: Suppose the current price is 1400, and you agree to sell at 1500 if you wait for 7 days. Your guaranteed yield is 35. Consequently, your maximum earnings are capped at 1535 (1500 + 35). If the price exceeds 1500 when the contract concludes, you'd sell at 1535 (1500 + 35 fixed yield). Though such an outcome has a lower likelihood, your profit is substantially higher than if you'd sold the asset at the prevailing market price (1400).
      <br/><br/>
      For BUY-LOW: The market compensates you for the potential of incurring an unrealized loss when you purchase an asset at a rate higher than its market value at contract expiration.
      <br/><br/>
      Example: Consider the current price is 1400, and you consent to buy at 1300 after waiting for 7 days. Your set yield is 25. So, if the price drops to 1200 after 7 days, you'd effectively buy at 1275 (acquiring for 1300 with a +25 yield). In this scenario, at the point of settlement, you'd hold a position with an unrealized deficit of 75. While such an outcome has a lesser probability, it's vital to always consider this possibility. Remember, in this situation, you still benefit considerably compared to buying the asset outright at the going market rate (1400).
      `,
  },
];

export const EXTRA_FAQ = [
  {
    question: 'How is the yield determined?',
    answer: `The yield is influenced by market implied volatility and the chosen sell/buy price levels. The greater the deviation of the required ETH sell/buy price from the current market rate, the lower the yield. Additionally, the likelihood of the transaction being executed diminishes as this deviation increases.`,
  },
  {
    question: 'What is a “time limit-order with yield”?',
    answer: `The "time limit-order with yield" is an innovative concept introduced by TYMIO. It enables you to earn not from the transaction itself, but from the commitment to buy or sell ETH or WBTC. Even if the transaction doesn't materialize, you still gain passive income in USDC or ETH/WBTC. This transaction can be repeated, allowing you to continuously generate positive cash flow from your crypto assets or stablecoins.`,
  },
  {
    question: 'How is it different from a standard limit order?',
    answer: `A standard limit order typically triggers when the market reaches the specified price. In contrast, the TYMIO time-limit order with yield only executes if the price is either above or below the set level precisely at a predetermined date and time (the settlement date). Until that specific date and time, the price can fluctuate above or below the set level without triggering the order. For more details, refer to the TYMIO contract text before initiating a transaction.`,
  },
  {
    question:
      'Do I need to evaluate price charts and try to predict future prices when considering buying or selling an asset?',
    answer: `Predicting markets is an inherently challenging endeavor. We suggest proceeding with a deal on TYMIO only if you've assessed all potential outcomes and are comfortable with each scenario. Please carefully review all the details and conditions of the deal before finalizing the transaction.`,
  },
  {
    question: 'Are my funds safe?',
    answer: `Like any financial endeavor, there are inherent risks involved, such as smart-contract vulnerability, counterparty risk, custodial risk, and regulatory risk. We take these risks very seriously and work diligently to mitigate them. Here are some key measures we've implemented:
    <br/><br/>
    Your funds are secured in a smart-contract until the expiration date, ensuring they aren't exposed to counterparty risk. We utilize our own liquidity to generate the premium/yield.
    To safeguard funds against potential smart-contract vulnerabilities and thefts, TYMIO has established a reserve insurance fund of 100,000 USDC. You can view the current TVL on https://tymio.com to determine the percentage of TVL currently covered by this reserve insurance fund. This fund is intended to grow over time.
    That being said, it's crucial to understand that no system can be entirely risk-free. It's advisable not to invest funds you cannot afford to lose. Always conduct your own research (DYOR). Before any interaction, double-check the TYMIO smart-contract addresses:
    <br/><br/>
    [<a href="https://etherscan.io/address/0x0D0C69c9E31923712f2D51d994950D08Ed9b2958" rel="noreferrer" target="_blank">Mainnet</a>, <a href="https://arbiscan.io/address/0x0D0C69c9E31923712f2D51d994950D08Ed9b2958" rel="noreferrer" target="_blank">Arbitrum</a>]`,
  },
  {
    question: 'How does TYMIO make money?',
    answer: `The app earns revenue by taking a cut from the option premium (yield) generated. The exact percentage can fluctuate based on market conditions and the level of user involvement with TYMIO.`,
  },
  {
    question: 'If I make money, then somebody should lose it. Who is losing?',
    answer: `Some traders use crypto options to make high-risk/high-reward bets on significant price movements of the underlying assets. They buy both call and put options, and in many market conditions, these traders risk losing the premiums they've paid for these options. TYMIO capitalizes on the premiums from these call and put options to produce yield.`,
  },
  {
    question: 'How is TYMIO different from option vaults, staking, or farming?',
    answer: `TYMIO distinguishes itself in several ways:
    <br/><br/>
    Fixed APR: Unlike variable rates in other platforms, we provide a consistent return rate.<br/>
    Asset Choice: We exclusively deal with ETH, WBTC and USDC, avoiding the potential volatility and risks associated with altcoins.<br/>
    Flexibility: Compared to option vaults, TYMIO offers users greater flexibility.<br/>
    Competitive Returns: Our APR typically surpasses the rates found in staking.`,
  },
  {
    question: 'Can I get my funds back before the deal expires?',
    answer: `No, once committed, funds are locked until the agreed-upon date. Deal conditions are binding, and you must wait until the settlement of the deal to access your funds.`,
  },
  {
    question: 'Who is paying gas fees?',
    answer: `Gas fees are shared equally between you and TYMIO. You cover the gas fee when initiating a transaction, while TYMIO takes care of the gas fee when returning funds to your wallet.`,
  },
  {
    question: 'How do I save on gas?',
    answer: `To save on gas fees, consider bridging your crypto to Arbitrum. While the initial bridging might incur some cost, subsequent transaction fees on Arbitrum are significantly lower than on Ethereum. We recommend using the Arbitrum bridge, which can be accessed at: <a href="https://bridge.arbitrum.io/" target="_blank">https://bridge.arbitrum.io/</a>`,
  },
  {
    question: 'What are the benefits of TYMIO compared to active trading?',
    answer: `With TYMIO, you don't need to be a professional trader to earn. The advantages include:<br/>
    Time-efficiency: No need to constantly track the market.<br/>
    High probability of capital appreciation with each transaction.<br/>
    No risk of liquidation.<br/>
    Suitable for both novice and seasoned investors.`,
  },
  {
    question: 'What are the benefits of TYMIO compared to farming?',
    answer: `TYMIO offers:<br/>
    A more user-friendly interface and user experience (UI/UX).<br/>
    The convenience of using only ETH, WBTC and USDC, eliminating the complexities of altcoins.<br/>
    A fixed yield, providing clearer expectations on returns.`,
  },
  {
    question: 'What are the benefits of TYMIO compared to staking?',
    answer: `TYMIO offers:<br/>
    Potentially higher yields compared to traditional staking.<br/>
    Simplified user experience without the need to engage in complex staking procedures.<br/>
    No reliance on altcoin performance or network conditions, as TYMIO primarily uses ETH, WBTC and USDC.<br/>
    Predictable returns with fixed yield, allowing for better financial planning.`,
  },
  {
    question: 'Do you have a whitepaper?',
    answer: `Yes, our whitepaper provides a detailed overview of our platform, its mechanisms, and our vision for the future. You can access it at the following link: [URL]. We recommend going through the whitepaper to get an in-depth understanding of how TYMIO works.`,
  },
  {
    question: 'Could I use TYMIO from my mobile phone?',
    answer: `Yes, TYMIO is compatible with mobile browsers and integrates with mobile wallets like Metamask. Just ensure you have the Metamask mobile app installed, and you can access and interact with TYMIO directly from your smartphone.`,
  },
  {
    question: 'What is the purpose of TYMIO?',
    answer: `TYMIO is a DeFi crypto service that allows users to set time-limited orders with yield. This enables crypto holders to monetize their willingness to sell or buy assets at a specific price. In other words, you can put your crypto to work and earn annualized percentage yield (APR) on your crypto, while maintaining a low risk profile.`,
  },
  {
    question: 'I have a problem with my transaction, can you help me?',
    answer: `We're here to help. Please reach out to our support team through the in-app chat function, or you can also send an email detailing your issue to info@tymio.com. Ensure you provide as much detail as possible about the transaction, but never share your private keys or sensitive information.`,
  },
  {
    question: 'What are the 5 principles of tymionauts?',
    answer: `The principles of tymionauts are rooted in both a belief in the transformative potential of cryptocurrency and a cautious, well-informed approach to transactions:
    <br/><br/>
    <b>1. We believe in the long-term future of crypto.</b><br/>
    This principle emphasizes a deep-rooted belief in the enduring value and transformative potential of cryptocurrency, viewing it not merely as a speculative tool but as a significant paradigm shift in finance and technology.
    <br/><br/>
    <b>2. We only enter into a transaction if we are ok with both outcomes.</b><br/>
    Before committing to any transaction, it's crucial to weigh both potential results. This ensures that decisions are made from an informed perspective, reducing the likelihood of future regrets.
    <br/><br/>
    <b>3. We don't rush, we avoid greed, and we don’t let emotions drive our deals.</b><br/>
    Recognizing that the crypto market can be volatile, this principle underscores the importance of making calm and deliberate decisions, resisting the urge to act hastily or be swayed by short-term market movements.
    <br/><br/>
    <b>4. We have patience, and we do not waste time on active trading.</b><br/>
    Active trading requires time, effort, and a vast amount of knowledge. Instead, by prioritizing passive income avenues that align with long-term market beliefs, one can focus on consistent growth without the stress of daily market fluctuations.
    <br/><br/>
    <b>5. Our priority is long-term capital growth.</b><br/>
    This principle is all about the long game. By emphasizing strategies and decisions that favor long-term capital appreciation, one aligns actions with the foundational belief in the sustained value of cryptocurrency.
    `,
  },
];

export const COUNTRIES = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua & Deps',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Rep',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo',
  'Congo {Democratic Rep}',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland {Republic}',
  'Israel',
  'Italy',
  'Ivory Coast',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea North',
  'Korea South',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar, {Burma}',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russian Federation',
  'Rwanda',
  'St Kitts & Nevis',
  'St Lucia',
  'Saint Vincent & the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome & Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad & Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];
