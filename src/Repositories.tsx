const Repositories = () => {
  return (
    <div style={{
      backgroundColor: '#0d1117',
      color: '#c9d1d9',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
      minHeight: '100vh',
      lineHeight: 1.5
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#161b22',
        borderBottom: '1px solid #30363d',
        padding: '1rem 1.5rem'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <nav style={{ color: '#8b949e', fontSize: '0.875rem' }}>
            <span style={{ color: '#f0f6fc', fontWeight: 600 }}>repositories</span>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '1.5rem' }}>
        {/* Page Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid #21262d'
        }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f0f6fc' }}>
            Repositories
            <span style={{
              background: '#21262d',
              color: '#8b949e',
              fontSize: '0.75rem',
              padding: '0.125rem 0.5rem',
              borderRadius: '2rem',
              marginLeft: '0.5rem'
            }}>3</span>
          </h1>
        </div>

        {/* Repository List */}
        <div style={{ border: '1px solid #30363d', borderRadius: '6px', overflow: 'hidden' }}>
          {/* Atlas Global Insights */}
          <RepoItem
            name="atlas-interactive"
            description="Enterprise-grade global background screening and passenger vetting platform for international corporations. Aggregates 200+ OSINT data sources across 190 countries for real-time identity verification, risk assessment, and compliance screening at scale."
            updatedDate="Aug 28, 2025"
            domainAsset={{ name: 'atlasglobalinsights.com', url: 'https://ap.www.namecheap.com/domains/domaincontrolpanel/atlasglobalinsights.com' }}
          />

          {/* Validator */}
          <RepoItem
            name="validator"
            description="Background check software."
            updatedDate="Jul 21, 2024"
          />

          {/* Validator II */}
          <RepoItem
            name="validator-ii"
            description="Next-generation background check engine. Reduced processing costs 40%, increased throughput 3x over Validator I."
            updatedDate="Oct 22, 2024"
            isLast
          />
        </div>

        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #21262d' }} />

        {/* Atlas Global Insights Detail */}
        <RepoDetail
          name="atlas-interactive"
          updatedDate="Aug 28, 2025"
          files={[
            { name: '.github', isFolder: true, date: 'Jan 12, 2025' },
            { name: 'src', isFolder: true, date: 'Jan 18, 2025' },
            { name: 'api', isFolder: true, date: 'Jan 16, 2025' },
            { name: 'lib', isFolder: true, date: 'Jan 14, 2025' },
            { name: 'tests', isFolder: true, date: 'Jan 10, 2025' },
            { name: '.env.example', isFolder: false, date: 'Dec 28, 2024' },
            { name: 'package.json', isFolder: false, date: 'Jan 15, 2025' },
            { name: 'README.md', isFolder: false, date: 'Jan 8, 2025' },
            { name: 'tsconfig.json', isFolder: false, date: 'Dec 20, 2024' },
          ]}
        />

        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #21262d' }} />

        {/* Validator Detail */}
        <RepoDetail
          name="validator"
          updatedDate="Jul 21, 2024"
          files={[
            { name: 'src', isFolder: true, date: 'Oct 22, 2024' },
            { name: 'checks', isFolder: true, date: 'Oct 15, 2024' },
            { name: 'tests', isFolder: true, date: 'Oct 10, 2024' },
            { name: 'package.json', isFolder: false, date: 'Oct 22, 2024' },
            { name: 'README.md', isFolder: false, date: 'Sep 5, 2024' },
          ]}
        />

        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #21262d' }} />

        {/* Validator II Detail */}
        <RepoDetail
          name="validator-ii"
          updatedDate="Oct 22, 2024"
          files={[
            { name: 'src', isFolder: true, date: 'Jan 15, 2025' },
            { name: 'engine', isFolder: true, date: 'Jan 12, 2025' },
            { name: 'benchmarks', isFolder: true, date: 'Jan 8, 2025' },
            { name: 'tests', isFolder: true, date: 'Jan 6, 2025' },
            { name: 'package.json', isFolder: false, date: 'Jan 10, 2025' },
            { name: 'README.md', isFolder: false, date: 'Jan 3, 2025' },
          ]}
        />
      </main>
    </div>
  )
}

interface RepoItemProps {
  name: string
  description: string
  updatedDate: string
  domainAsset?: { name: string; url: string }
  isLast?: boolean
}

const RepoItem = ({ name, description, updatedDate, domainAsset, isLast }: RepoItemProps) => (
  <div style={{
    padding: '1rem',
    borderBottom: isLast ? 'none' : '1px solid #21262d',
  }}>
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
      <RepoIcon />
      <span style={{ fontSize: '1.25rem', fontWeight: 600, color: '#58a6ff' }}>{name}</span>
      <span style={{
        fontSize: '0.75rem',
        color: '#8b949e',
        border: '1px solid #30363d',
        borderRadius: '2rem',
        padding: '0 0.5rem',
        marginLeft: '0.5rem',
        fontWeight: 500
      }}>Private</span>
    </div>
    <p style={{ color: '#8b949e', fontSize: '0.875rem', marginBottom: '0.75rem', maxWidth: '720px' }}>
      {description}
    </p>
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', color: '#8b949e' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
        <span style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: '#3178c6' }}></span>
        TypeScript
      </span>
      <span style={{ filter: 'blur(4px)', userSelect: 'none' }}>███.█ MB</span>
      <span>Updated {updatedDate}</span>
    </div>
    {domainAsset && (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', color: '#8b949e', marginTop: '0.5rem' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          <DomainIcon />
          <a href={domainAsset.url} target="_blank" rel="noopener noreferrer" style={{ color: '#58a6ff', textDecoration: 'none' }}>
            {domainAsset.name}
          </a>
          <span style={{ color: '#6b7280', marginLeft: '0.25rem' }}>(Domain Asset)</span>
        </span>
      </div>
    )}
  </div>
)

interface FileItem {
  name: string
  isFolder: boolean
  date: string
}

interface RepoDetailProps {
  name: string
  updatedDate: string
  files: FileItem[]
}

const RepoDetail = ({ name, updatedDate, files }: RepoDetailProps) => (
  <section>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      paddingBottom: '1rem',
      borderBottom: '1px solid #21262d'
    }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#f0f6fc', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <RepoIcon />
        {name}
        <span style={{
          fontSize: '0.75rem',
          color: '#8b949e',
          border: '1px solid #30363d',
          borderRadius: '2rem',
          padding: '0 0.5rem',
          fontWeight: 500
        }}>Private</span>
      </h2>
    </div>

    <div style={{ border: '1px solid #30363d', borderRadius: '6px', overflow: 'hidden' }}>
      <div style={{
        display: 'flex',
        gap: '1rem',
        padding: '0.75rem 1rem',
        background: '#161b22',
        borderBottom: '1px solid #30363d',
        fontSize: '0.875rem'
      }}>
        <span style={{ filter: 'blur(4px)', userSelect: 'none', color: '#8b949e' }}>██.█ MB</span>
        <span style={{ marginLeft: 'auto', color: '#8b949e' }}>Last updated: {updatedDate}</span>
      </div>

      <div style={{ background: '#0d1117', filter: 'blur(3px)', userSelect: 'none' }}>
        {files.map((file, index) => (
          <div
            key={file.name}
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(200px, 1fr) 1fr auto',
              padding: '0.5rem 1rem',
              borderBottom: index === files.length - 1 ? 'none' : '1px solid #21262d',
              fontSize: '0.875rem',
              gap: '1rem'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c9d1d9' }}>
              {file.isFolder ? <FolderIcon /> : <FileIcon />}
              {file.name}
            </span>
            <span style={{ color: '#8b949e' }}>Modified</span>
            <span style={{ color: '#8b949e', textAlign: 'right', whiteSpace: 'nowrap' }}>{file.date}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const RepoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="#8b949e" style={{ flexShrink: 0, marginTop: '0.125rem' }}>
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"/>
  </svg>
)

const DomainIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="#8b949e">
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"/>
    <path d="M8 2.5a.75.75 0 0 1 .75.75v4.5h3.5a.75.75 0 0 1 0 1.5h-4.25a.75.75 0 0 1-.75-.75v-5.25A.75.75 0 0 1 8 2.5Z"/>
  </svg>
)

const FolderIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="#54aeff">
    <path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"/>
  </svg>
)

const FileIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="#8b949e">
    <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"/>
  </svg>
)

export default Repositories
