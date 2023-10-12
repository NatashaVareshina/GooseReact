import './firstSection.css'

export default function FirstSection() {
    return (
        <section className='box' id='firstSection'>
            <div className='firstItem'>
                <h2>КТО ЖЕ ТАКОЙ <br />ГУСЬ?</h2>
                <img src="https://images.unsplash.com/photo-1509828945144-552b3b1a968d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTAwNXwwfDF8c2VhcmNofDk2fHxnb29zZXxlbnwwfHx8fDE2NzYxNDI1Mjg&ixlib=rb-4.0.3&q=80&w=1080" />
            </div>
            <div className="secondItem">
                <p>Гусь - одна из самых умных домашних птиц. Они способны самостоятельно 
                   гулять, без проблем находить дорогу домой, способны защитить себя и 
                   свое потомство от хищников.</p>
                <p>Несмотря на то что самыми распространенными домашними птицами в 
                   хозяйстве признаны куры, гусь все же был одомашнен первым!</p>
                <p>Многие привыкли, что гусь - это такая домашняя птица, и ничего 
                   больше. Но мало кто знает, что природы и эволюционные процессы 
                   подарили ему невероятную вынсливость и способность к выживанию 
                   в действительно суровых условиях. Обитает он на территории многих 
                   стран мира и разнится в зависимости от вида.</p>
            </div>
        </section>
    )
}