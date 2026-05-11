import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '69 commands available',
    Svg: require('@site/static/img/bash-icon.svg').default,
    description: (
      <>
          fastDbg has a various kind of commands focus on the exploitation.
          Including advanced commands such as visual-heap, bins, findruction, pagetable, etc.
      </>
    ),
  },
  {
    title: 'userland+kernel',
    Svg: require('@site/static/img/linux-tux.svg').default,
    description: (
      <>
          fastDbg supports native binary+kernel debugging with qemu with classy color syntax.
          fastDbg supports glibc 2.28~2.41.
      </>
    ),
  },
  {
    title: 'Powered by Golang',
    Svg: require('@site/static/img/Go-Logo_Blue.svg').default,
    description: (
      <>
        Worker, Parser, all were written in golang. Works faster with go routine parallelization.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
