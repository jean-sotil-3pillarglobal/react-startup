export default function LangGenerateId (chain, attr) {
  const path = `${chain.join('.')}.${attr}`;
  return path;
}
