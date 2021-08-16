interface ComplexConfig {
  /**
   * the width of image
   */
  width: number;

  /**
   * the height of image
   */
  height: number;
  crop: 'fill' | 'thumb';
  font: {
    family: string;
    size: number;
    weight: number;
  }
}

const LinkGen = (props: ComplexConfig) => {
  return (
    <pre>
      {JSON.stringify(props, null, 2)}
    </pre>
  )
}

export default LinkGen
