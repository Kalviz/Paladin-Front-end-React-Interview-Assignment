const Job = ({ job }) => {
  const calDate = (createdDate) => {
    const diff = Math.round(
      (new Date() - new Date(createdDate)) / (1000 * 60 * 60 * 24)
    )

    if (diff === 1) return ' ' + diff + ' day ago'
    else return ' ' + diff + ' days ago'
  }

  return (
    <div>
      <div className='jobs'>
        <div className='tile-icon'>
          <img
            src={
              job.company.logo_url === ''
                ? './noimage.jpg'
                : job.company.logo_url
            }
            className='company-logo'
            alt={job.company.name}
          />
        </div>
        <div className='inner-div' styles='flex: 1 1 0%;'>
          <div className='job-row'>
            <div className='job-col job-col-xs-24 job-col-sm-18'>
              <h4 styles='margin-bottom: 0px;'>
                <a
                  href={'https://rooster.jobs/jobs/' + job.id}
                  target='_blank'
                  rel='noreferrer'
                >
                  {job.title}
                </a>
              </h4>
            </div>

            <div
              className='job-col job-col-xs-0 job-col-sm-6'
              styles='text-align: right;'
            >
              <div styles='font-size: 14px;'>
                <span className='inline-span'>
                  <span
                    role='img'
                    aria-label='clock-circle'
                    className=''
                    styles='margin-right: 0.2rem;'
                  >
                    <svg
                      viewBox='64 64 896 896'
                      focusable='false'
                      className=''
                      data-icon='clock-circle'
                      width='1em'
                      height='1em'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'></path>
                      <path d='M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z'></path>
                    </svg>
                  </span>
                  {calDate(job.created_at)}
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className='data-row'>
              <a
                className='active-orange-text'
                href={'https://rooster.jobs/' + job.company.id}
                target='_blank'
                rel='noreferrer'
              >
                {job.company.name}
              </a>
            </div>
            <div className='data-row'>
              <a
                href={'https://rooster.jobs/jobs/' + job.id}
                target='_blank'
                rel='noreferrer'
              >
                <span className='inline-value'>
                  {job.class} &gt; {job.subclass}
                </span>
              </a>
            </div>
          </div>
          <div className='data-row'>
            <span className='inline-value'>
              <img className='icon' src='/work.png' alt='work' />
              {job.job_type}
            </span>
            <span className='inline-value'>
              <img className='icon' src='/globe.png' alt='global' />
              {job.location}
            </span>
          </div>
          <div className='tags-row'></div>
        </div>
      </div>
    </div>
  )
}

export default Job
