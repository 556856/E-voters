import { Fragment, useState } from 'react'
import { toast } from 'react-toastify'
import { Check, Info, Globe } from 'react-feather'
import Avatar from '@components/avatar'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import ExtensionsHeader from '@components/extensions-header'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Button, Input, CardFooter } from 'reactstrap'
const ToastSuccess = () => (
    <Fragment>
      <div className='toastify-header pb-0'>
        <div className='title-wrapper'>
          <Avatar size='sm' color='success' icon={<Check />} />
          <h6 className='toast-title'>Copied To Clipboard !</h6>
        </div>
      </div>
    </Fragment>
  )
  
const CopytoClip = () => {
    const [value, setValue] = useState('https://vote.electionrunner.com/election/Bfl5C')
    const [copied, setCopied] = useState(false)
    /*eslint-enable */
  
    const handleCopy = ({ target: { value } }) => {
      setValue(value)
      setCopied(false)
    }
  
    const onCopy = () => {
      setCopied(true)
      toast.success(<ToastSuccess />, {
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: false
      })
    }
    return (
            <Card>
              <CardHeader>
                  <div style={{display:'flex', gap:'10px'}}>
                  <Globe/>
                <CardTitle tag='h4'>Election URLs</CardTitle>
                  </div>
                  
              </CardHeader>
              <CardFooter>
                <Row style={{padding:'35px'}}>
                <Col md='2'>
                    <h5>Election Live URL</h5>
                  </Col>
                  <Col md='7' className='pr-sm-0 mb-md-0 mb-1'>
                    <Input value={value} onChange={handleCopy} />
                    <span style={{fontSize:'10px'}}><Info size={10}/>This URL will not be accessible until after the election has been launched.</span>
                  </Col>
                  <Col md='3'>
                    <CopyToClipboard onCopy={onCopy} text={value}>
                      <Button.Ripple color='primary' outline>
                        Copy!
                      </Button.Ripple>
                    </CopyToClipboard>
                  </Col>
                  <Col md='12' style={{padding:'20px'}}></Col>
                  <Col md='2'>
                    <h5>ElectionPreview URL</h5>
                  </Col>
                  <Col md='7' className='pr-sm-0 mb-md-0 mb-1'>
                    <Input value={value} onChange={handleCopy} />
                    <span style={{fontSize:'10px'}}><Info size={10}/>This URL will not be accessible until after the election has been launched.</span>
                  </Col>
                  <Col md='3'>
                    <CopyToClipboard onCopy={onCopy} text={value}>
                      <Button.Ripple color='primary' outline>
                        Copy!
                      </Button.Ripple>
                    </CopyToClipboard>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
    )
}

export default CopytoClip