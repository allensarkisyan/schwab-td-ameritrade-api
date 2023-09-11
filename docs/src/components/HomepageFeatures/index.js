import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { CandlestickChartIcon, HexagonIcon, GithubIcon } from 'lucide-react';

const FeatureList = [
  {
    title: 'API Implementation',
    Svg: CandlestickChartIcon,
    description: (
      <>
        Market Data, Account Data & Trading
      </>
    ),
  },
  {
    title: 'Node.js & Web',
    Svg: HexagonIcon,
    description: (
      <>
        Written in TypeScript for Node.js & Web
      </>
    ),
  },
  {
    title: 'Fully Open Source',
    Svg: GithubIcon,
    description: (
      <>
        MIT Licensed & Fully Open Source
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}